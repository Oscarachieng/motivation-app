class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

private

#Handle record missing
def render_not_found(exception)
    render json:{errors:exception}, status: :not_found
end

#Handle invalid
def render_invalid(exception)
    render json:{errors:exception.record.errors.full_messages}
end

    
end
