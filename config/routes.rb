Rails.application.routes.draw do
  post '/login' => "sessions#create"
  delete '/logout' => "sessions#destroy"
  resources :users
  get '/profile' => "users#profile"
  resources :monsters

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
