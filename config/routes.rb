Rails.application.routes.draw do
  get 'home/index'
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  resources :channels do
    resource :channel_user
  end
  root to: "channels#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
