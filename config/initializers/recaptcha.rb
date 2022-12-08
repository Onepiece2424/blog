Recaptcha.configure do |config|
  config.secret_key = ENV['RECAPTCHA_SECRET_KEY']
end
