import User from '../models/Users';

const checkPermissions = (userRole, url, method) => {
  let isAccess = false;
  const croppedUrl = url.split('=', 1)[0];

  userRole.resources.forEach(resource => {
    resource.urls.forEach(url => {
      if (url === url || url === croppedUrl) {
        if (resource.actions.indexOf(method) !== -1) {
          isAccess = true;
        }
      }
    })
  })

  return isAccess;
}

const acl = async (req, res, next) => {
  const user = await User.findById(req.user._id).populate({
    path: 'data',
    model: 'users.data',
    populate: {
      path: 'role',
      model: 'roles'
    }
  });
  const permission = checkPermissions(user.data.role, req.originalUrl, req.method);

  if (permission) {
    next();
  } else {
    res.status(403).json({
      message: 'Недостаточно прав для этого действия!'
    })
  }
}

export default acl;
