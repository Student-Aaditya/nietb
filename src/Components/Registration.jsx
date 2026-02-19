import React, { useState } from "react";

export default function Registration() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        mobile: "",
        query: "",
    });

    const [showOtp, setShowOtp] = useState(false);
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [agreed, setAgreed] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleOtpChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
    };

    const handleGetOtp = () => {
        if (!form.mobile || form.mobile.length !== 10) {
            alert("Enter valid 10-digit mobile number");
            return;
        }
        setShowOtp(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agreed) {
            alert("Please accept the agreement");
            return;
        }

        console.log("Form Data:", form);
        console.log("OTP:", otp.join(""));
    };

    return (
        <div className="bg-white shadow-2xl w-full h-full rounded-2xl p-8 md:p-6 border">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#D6323A]">
                    Quick Registration
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Share your details and our counselling team will connect with you within 24 hours.
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D6323A]/70"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email ID *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D6323A]/70"
                    />
                </div>

                {/* Mobile */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number *
                    </label>
                    <div className="flex gap-2">
                        <span className="px-3 py-2 border rounded-md bg-gray-50 text-sm">
                            +91
                        </span>
                        <input
                            type="tel"
                            name="mobile"
                            value={form.mobile}
                            onChange={handleChange}
                            maxLength="10"
                            required
                            placeholder="10-digit number"
                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D6323A]/70"
                        />
                    </div>
                </div>

                {/* Query */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Query / Preference
                    </label>
                    <textarea
                        name="query"
                        value={form.query}
                        onChange={handleChange}
                        placeholder="Any questions about course, fees, placements..."
                        className="w-full border rounded-md px-3 py-2 h-24 resize-none focus:ring-2 focus:ring-[#D6323A]/70"
                    />
                </div>

                {/* Agreement */}
                <label className="flex gap-2 text-xs text-gray-600">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        className="mt-0.5"
                    />
                    I agree to receive admission-related communication.
                </label>

                {/* OTP Section */}
                {showOtp && (
                    <div className="mt-2">
                        <label className="block text-xs text-gray-600 mb-1">
                            Enter OTP
                        </label>
                        <div className="flex justify-between gap-1">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) =>
                                        handleOtpChange(e.target.value, index)
                                    }
                                    className="w-10 h-10 border rounded-md text-center text-lg"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-[#D6323A] text-white py-3 rounded-md font-semibold hover:bg-[#b52b32]"
                >
                    Register & Request Callback
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                    By submitting this form, you consent to NIET Business School contacting you for admission-related communication 
                    </p>
            </form>
        </div>
    );
}