Rails.application.routes.draw do
  post '/login' => "sessions#create"
  delete '/logout' => "sessions#destroy"
  resource :users
  get '/profile' => "users#profile"
end
