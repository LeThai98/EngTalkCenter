const signUp = async (req, res) => {

    res.status(201).json({ message: 'Sign up successfully' });
    // try {
    //     const { email, password, name } = req.body;
    //     const user = await User.create({ email, password, name });
    //     res.status(201).json({ user });
    // } catch (error) {
    //     res.status(400).json({ error });
    // }
    };

module.exports = {
    signUp,
};