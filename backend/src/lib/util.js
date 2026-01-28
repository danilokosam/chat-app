import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    /**
     * Cookie settings for Cross-Site context (Frontend on Vercel, Backend on Render)
     * - sameSite: "none" is required for cross-domain cookie transmission.
     * - secure: true is mandatory when sameSite is set to "none".
     */
    sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
    secure: process.env.NODE_ENV === "development" ? false : true,
  });

  return token;
};
