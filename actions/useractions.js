"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    try {
        await connectDb()
        
        const user = await User.findOne({ username: to_username })
        if (!user || !user.razorpayid || !user.razorpaysecret) {
            return { error: "Creator payment details are incomplete or not found." }
        }

        const instance = new Razorpay({ key_id: user.razorpayid, key_secret: user.razorpaysecret })

        const options = {
            amount: Number.parseInt(amount),
            currency: "INR",
        }

        const order = await instance.orders.create(options)

        await Payment.create({ 
            oid: order.id, 
            amount: amount / 100, 
            to_user: to_username, 
            name: paymentform.name, 
            message: paymentform.message 
        })

        // Serialize the Razorpay object to prevent Next.js Server Action errors
        return JSON.parse(JSON.stringify(order))
    } catch (error) {
        console.error("[Payment Initiation Error]:", error)
        return { error: "Failed to initiate payment. Please try again later." }
    }
}

export const fetchuser = async (username) => {
    try {
        await connectDb()
        const u = await User.findOne({ username: username })
        if (!u) return null
        return u.toObject({ flattenObjectIds: true })
    } catch (error) {
        console.error("[Fetch User Error]:", error)
        return null
    }
}

export const fetchpayments = async (username) => {
    try {
        await connectDb()
        const payments = await Payment.find({ to_user: username, done: true })
            .sort({ amount: -1 })
            .limit(10)
            .lean()
        return payments
    } catch (error) {
        console.error("[Fetch Payments Error]:", error)
        return []
    }
}

export const updateProfile = async (data, oldusername) => {
    try {
        await connectDb()
        const ndata = Object.fromEntries(data)

        if (oldusername !== ndata.username) {
            const existingUser = await User.findOne({ username: ndata.username })
            if (existingUser) {
                return { error: "Username already exists" }
            }
            await User.updateOne({ email: ndata.email }, ndata)
            await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
        } else {
            await User.updateOne({ email: ndata.email }, ndata)
        }
        
        return { success: true }
    } catch (error) {
        console.error("[Update Profile Error]:", error)
        return { error: "Failed to update profile settings." }
    }
}
