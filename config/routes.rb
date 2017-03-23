Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource  :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update, :destroy]
    resources :blogs
    resources :comments, only: [:create, :show, :index, :destroy]
    resources :tags
    resources :taggings, only: [:create, :show, :index, :destroy]
  end
end
