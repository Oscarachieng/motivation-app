class ApplicationController < ActionController::API
    include ActionController::Cookies

 rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
 rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
 before_action :authorize
 skip_before_action :authorize, only: [:index]

 private
 #catch not found
 def render_not_found(exception)
    render json:{errors:exception}, status: :not_found
 end

 #Catch invalid record
 def render_invalid(exception)
    render json:{errors:exception.record.errors.full_messages},status: :unprocessable_entity
 end

 #Authorization
 def authorize
   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
 end
    
end
