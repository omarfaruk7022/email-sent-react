import { useState } from "react";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);

  const order = {
    customerName: "মোঃ মনসুর",
    orderId: "PO123456",
    items: [
      { name: "পুরুষদের কুর্তা", price: 1200 },
      { name: "সাদা টুপি", price: 650 },
    ],
    total: 1850,
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      // await axios.post("http://localhost:5000/send-email", {
      //   to: "omarfaruk7022@gmail.com",
      //   subject: "Your Order Confirmation – Islamic Poshak",
      //   html: `
      //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f6fdf7; border: 1px solid #cce3d4; padding: 20px;">
      //       <h2 style="color: #2e7d32;">🕌 Islamic Poshak</h2>
      //       <p>Assalamu Alaikum <strong>Md Mansur</strong>,</p>
      //       <p>Thank you for your order! Below are your order details.</p>

      //       <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 20px;">
      //         <h3 style="color: #2e7d32;">📦 Order Summary</h3>
      //         <p><strong>Order ID:</strong> #PO123456</p>
      //         <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
      //           <thead>
      //             <tr>
      //               <th align="left" style="padding: 8px; border-bottom: 1px solid #c8e6c9;">Product</th>
      //               <th align="right" style="padding: 8px; border-bottom: 1px solid #c8e6c9;">Price</th>
      //             </tr>
      //           </thead>
      //           <tbody>
      //             <tr>
      //               <td style="padding: 8px;">Men's Kurta</td>
      //               <td align="right" style="padding: 8px;">৳1200</td>
      //             </tr>
      //             <tr>
      //               <td style="padding: 8px;">White Topi</td>
      //               <td align="right" style="padding: 8px;">৳650</td>
      //             </tr>
      //             <tr>
      //               <td colspan="2" style="border-top: 1px solid #c8e6c9; padding: 8px;"></td>
      //             </tr>
      //             <tr>
      //               <td style="padding: 8px;"><strong>Total</strong></td>
      //               <td align="right" style="padding: 8px;"><strong>৳1850</strong></td>
      //             </tr>
      //           </tbody>
      //         </table>
      //       </div>

      //       <p style="margin-top: 20px;">Your order will be shipped within 2-3 working days inshaAllah.</p>

      //       <a href="https://yourwebsite.com/orders/PO123456" style="display: inline-block; background: #2e7d32; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">View Order</a>

      //       <hr style="margin: 30px 0; border: none; border-top: 1px solid #c8e6c9;" />

      //       <p style="font-size: 14px; color: #555;">If you have any questions, reply to this email or contact us at <a href="mailto:support@islamicposhak.com" style="color: #2e7d32;">support@islamicposhak.com</a>.</p>

      //       <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} Islamic Poshak. All rights reserved.</p>
      //     </div>
      //   `,
      // });
      await axios.post("http://localhost:5000/send-email", {
        to: "mdmansur8181@gmail.com",
        subject: "আপনার অর্ডার নিশ্চিত করা হয়েছে – ইসলামিক পোশাক",
        html: `
          <div style="font-family: 'Noto Sans Bengali', Arial, sans-serif; max-width: 600px; margin: auto; background: #f6fdf7; border: 1px solid #cce3d4; padding: 20px;">
            <h2 style="color: #2e7d32;">🕌 ইসলামিক পোশাক</h2>
            <p>আসসালামু আলাইকুম <strong>মোঃ মনসুর</strong>,</p>
            <p>আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। নিচে আপনার অর্ডারের বিস্তারিত দেওয়া হল:</p>
      
            <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <h3 style="color: #2e7d32;">📦 অর্ডার সারাংশ</h3>
              <p><strong>অর্ডার আইডিঃ</strong> #PO123456</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                  <tr>
                    <th align="left" style="padding: 8px; border-bottom: 1px solid #c8e6c9;">পণ্য</th>
                    <th align="right" style="padding: 8px; border-bottom: 1px solid #c8e6c9;">দাম</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 8px;">পুরুষদের কুর্তা</td>
                    <td align="right" style="padding: 8px;">৳১২০০</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px;">সাদা টুপি</td>
                    <td align="right" style="padding: 8px;">৳৬৫০</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="border-top: 1px solid #c8e6c9; padding: 8px;"></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px;"><strong>মোট</strong></td>
                    <td align="right" style="padding: 8px;"><strong>৳১৮৫০</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
      
            <p style="margin-top: 20px;">আপনার অর্ডারটি ইনশাআল্লাহ ২-৩ কার্যদিবসের মধ্যে পাঠানো হবে।</p>
      
            <a href="https://yourwebsite.com/orders/PO123456" style="display: inline-block; background: #2e7d32; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 20px;">অর্ডার দেখুন</a>
      
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #c8e6c9;" />
      
            <p style="font-size: 14px; color: #555;">প্রশ্ন থাকলে এই ইমেইলে রিপ্লাই করুন অথবা আমাদের <a href="mailto:support@islamicposhak.com" style="color: #2e7d32;">support@islamicposhak.com</a> এ যোগাযোগ করুন।</p>
      
            <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} ইসলামিক পোশাক। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        `,
      });

      alert("Email sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send email");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={sendEmail}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
      >
        {loading ? "Sending..." : "Send Email"}
      </button>
    </div>
  );
}

export default App;
