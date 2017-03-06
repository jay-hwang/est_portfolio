export const signup = (user, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/users',
    data: user,
    success,
    error
  });
};

export const updateUser = (user, success, error) => {
  $.ajax ({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user },
    success,
    error
  });
};

export const deleteUser = (id, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/users/${id}`,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/session',
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: 'api/session',
    success,
    error
  });
};
