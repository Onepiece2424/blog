Rails.application.routes.draw do
  resources :items
  namespace 'api' do
    namespace 'v1' do
      resources :posts
      namespace :posts do
        post "call_api"
      end
    end
  end
end
