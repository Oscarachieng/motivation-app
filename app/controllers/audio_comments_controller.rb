class AudioCommentsController < ApplicationController
    #GET /audio_comments
    def index
        render json:AudioComment.all
    end
    #GET /audio_comments/:id
    def show
        render json: find_audio_comment
    end

    #POST /audio_comments
    def create
       audio_comment = AudioComment.create!(audio_comment_params)
       render json: audio_comment, status: :created
    end

    #PATCH /audio_comments/:id
    def update
        audio_comment = find_audio_comment
        audio_comment.update!(audio_comment_params)
        render json: audio_comment, statu: :updated
    end

    #DELETE /audio_comments/:id
    def destroy
        audio_comment = find_audio_comment
        audio_comment.destroy
        head :no_content
    end
    
    private
    
    #Find a comment
    def find_audio_comment
      audio_comment = AudioComment.find(params[:id])
    end

    #permit params
    def audio_comment_params
        params.permit(:user_id,:audio_id,:likes,:comment)
    end
end
