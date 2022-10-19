Rails.application.routes.draw do
  resources :subscriptions
  resources :students
  resources :staffs
  resources :admins, only: [:index]
  
end
