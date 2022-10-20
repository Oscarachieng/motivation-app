Rails.application.routes.draw do
  resources :staffs
  resources :admins, only: [:index]
  
end