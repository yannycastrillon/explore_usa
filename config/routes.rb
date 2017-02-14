Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'images/:id' => 'api#show'    # api/v1/images/:id
      get 'images'   => 'api#search'   # api/v1/images?seach=california
    end
  end
  
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }
root to: 'home#index'

end
