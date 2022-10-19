Rails.application.routes.draw do
  resources :staffs, only: [:index]
  resources :admins, only: [:index]
  
end
