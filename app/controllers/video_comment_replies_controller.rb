class VideoCommentRepliesController < ApplicationController
    # GET /video_comment_replies
    def index
        render json: VideoCommentReply.all
    end
    # GET /video_comment_replies/:id
    def show
        render json: find_a_reply
    end

    # POST /video_comment_replies
    def create
        video_comment_reply = VideoCommentReply.create!(video_reply_params)
        render json:video_comment_reply,status: :created

    end

    # PATCH /video_comment_replies/:id
    def update
        video_comment_reply = find_video_reply
        video_comment_reply.update!(video_reply_params)
        render json: video_comment_reply,status: :accepted
    end

    # DELETE /video_comment_replies/:id
    def destroy
        video_comment_reply = find_a_reply
        video_comment_reply.destroy
        head :no_content
    end


    private
    #find_a_reply    
    def find_video_reply
        video_comment_reply = VideoCommentReply.find(params[:id])
    end

    #permit params
    def video_reply_params
        params.permit(:likes,:reply,:user_id,:video_comment_id)
    end
end
