class ApplicationController < ActionController::API
    include ActionController::Cookies

    def index
        puts("ADmin is now created")
        puts("Test successful")
end
