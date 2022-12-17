Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :posts
      namespace :posts do
        post "call_api"
      end
    end
  end
end
