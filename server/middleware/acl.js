import User from '../models/Users';
import Role from '../models/Roles';

const checkPermissions = (userRole, url, method) => {
  let isAccess = false;
  const croppedUrl = url.split('=', 1)[0];

  userRole.resources.forEach(resource => {
    if (resource.url === url || resource.url === croppedUrl) {
      if (resource.actions.indexOf(method) !== -1) {
        isAccess = true;
      }
    }
  })

  return isAccess;
}

const acl = async (req, res, next) => {
  const user = await User.findById(req.user._id).populate('data');
  const userRole = await Role.findById(user.data.role);
  const permission = checkPermissions(userRole, req.originalUrl, req.method);

  if (permission) {
    next();
  } else {
    res.status(403).json({
      message: 'Недостаточно прав для этого действия!'
    })
  }
}

export default acl;
