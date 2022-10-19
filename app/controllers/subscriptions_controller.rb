class SubscriptionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET /subscriptions
    def index
      subscriptions = Subscription.all
      render json: subscriptions
    end
  
    # POST /subscriptions
    def create
      subscription = Subscription.create!(subscription_params)
      render json: subscription, status: :created
    end
  
    # GET /subscriptions/:id
    def show
      subscription = find_subscription
      render json: subscription
    end
  
    # PATCH /subscriptions/:id
    def update
      subscription = find_subscription
      subscription.update!(subscription_params)
      render json: subscription
    end
  
  
    # DELETE /subscriptions/:id
    def destroy
      subscription = find_subscription
      subscription.destroy
      head :no_content
    end
  
    private
  
    def find_subscription
      Subscription.find(params[:id])
    end
  
    def subscription_params
      params.permit(:student_id, :category_id)
    end
  
    def render_not_found_response
      render json: { error: "Subscription not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
