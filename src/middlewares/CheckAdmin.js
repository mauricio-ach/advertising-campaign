const checkSuperAdmin = (req, res, next) => {
    try {
        const userRoles = req.userData.roles;
        console.log(userRoles);
        const isSuperAdmin = userRoles.some(role => role === 'super_admin');
        if (!isSuperAdmin) {
            return res.status(401).json({
                message: 'Unauthorized',
                error: 'User is not super admin',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }
}

module.exports = {
    checkSuperAdmin,
}