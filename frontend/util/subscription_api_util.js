export const createSubcription = (subscription, success, error) => {
  $.ajax ({
    method: 'POST',
    url: 'api/subscriptions',
    data: { subscription },
    success,
    error
  });
};

export const fetchSubscriptions = (success, error) => {
  $.ajax ({
    method: 'GET',
    url: 'api/subscriptions',
    success,
    error
  });
};

export const deleteSubscription = (id, success, error) => {
  $.ajax ({
    method: 'DELETE',
    url: `api/subscriptions/${id}`,
    success,
    error
  });
};
