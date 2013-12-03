require 'api_constraints'

Fiesta::Application.routes.draw do
  mount RailsAdmin::Engine => '/admin', :as => 'rails_admin'

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :albums
      resources :photos
    end
  end

  resources :albums, :only => [:index, :show]
  resources :manage, :only => [:index]

end
