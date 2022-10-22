class VideoCommentsController < ApplicationController
    # GET /video_comments
    def index
        render json: VideoComment.all
    end
    # GET /video_comments/:id
    def show
        render json: find_a_comment
      
    end
    # POST /video_comments
    def create
        video_comment = VideoComment.create!(video_comment_params)
        render json: video_comment, status: :created
    end
    # PATCH /video_comments/:id
    def update
        video_comment = find_a_comment
        video_comment.update!(video_comment_params)
        render json: video_comment, status: :accepted
    end
    # DELETE  /video_comments/:id
    def destroy
        video_comment = find_a_comment
        video_comment.destroy
        head :no_content
    end

    private

    #permit params
    def video_comment_params
        params.permit(:comment,:likes,:video_id,:user_id)
    end

    #find _a_comment
    def find_a_comment
        video_comment = VideoComment.find(params[:id])
    end
end
