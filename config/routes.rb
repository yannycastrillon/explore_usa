Rails.application.routes.draw do
  root to: 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'images/:id' => 'api#show'    # api/v1/images/:id
      get 'images'   => 'api#search'   # api/v1/images?seach=california
     get 'images/creative'=>'api#search_creative' #api/v1/images/creative?search=newYork
    end
  end
end
