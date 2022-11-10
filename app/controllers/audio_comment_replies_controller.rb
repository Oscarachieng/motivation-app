class AudioCommentRepliesController < ApplicationController
    #GET audio_comment_replies
    def index
        render json: AudioCommentReply.all
    end
    #GET audio_comment_replies/:id
    def show
        render json: find_audio_comment_reply
    end
    #POST audio_comment_replies
    def create
        audio_comment_reply = AudioCommentReply.create!(audio_comment_reply_params)
        render json:audio_comment_reply, status: :created
    end
    #PATCH audio_comment_replies/:id
    def update
        audio_comment_reply = find_audio_comment_reply
        audio_comment_reply.update!(audio_comment_reply_params)
        render json: audio_comment_reply , status: :accepted
    end
    #DELETE audio_comment_replies/:id
    def detroy
        audio_comment_reply = find_audio_comment_reply
        audio_comment_reply.destroy
        head :not_content
    end

    private
    #find a reply
    def find_audio_comment_reply
        audio_comment_reply = AudioCommentReply.find(params[:id])
    end

    #Permit params
    def audio_comment_reply_params
        params.permit(:user_id,:audio_comment_id,:reply,:likes)
    end
end
