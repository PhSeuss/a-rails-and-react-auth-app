Rails.application.routes.draw do
  post '/login' => "session#create"
  delete '/logout' => "sessions#destroy"
  resource :users
  get '/profile' => "users#profile"
end
