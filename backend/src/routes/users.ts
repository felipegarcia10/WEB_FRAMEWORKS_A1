import { Router } from "express";
import { User } from "../models/User"

const router = Router();

router.post("/", async (req, res) => {
	try {
		const created = await User.create(req.body);
		res.status(201).json(created);
	} catch (err: any) {
		res.status(400).json({ error: err.message });
	}
});

router.get("/:email", async (req, res) => {
	try {
		const user = await User.find({ email: req.params.email });
		if (!user) return res.status(404).json({ error: "User not found" });
		res.json(user);
	} catch (e: any) {
		res.status(400).json({ error: e.message });
	}
});
router.put("/:email/contact", async (req, res) => {
	try {
		const filter = { email: req.params.email };
		const update = { $addToSet: { comments: req.body.comments } };
		const options = { new: true };
		const user = await User.findOneAndUpdate(filter, update, options);
		if (!user) return res.status(404).json({ error: "User not found" });
		res.json(user);
	} catch (e: any) {
		res.status(400).json({ error: e.message });
	}
});

export default router;