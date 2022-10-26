class AudiosController < ApplicationController
     
    #GET /audios
    def index
        audios = Audio.all
        render json: audios
    end
    #GET /audios/:id
    def show
        render json: find_audio
    end

    #POST /audios/:id
    def create
        audio = Audio.create!(audio_params)
        render json: audio, status: :created
    end
    #PATCH /audios/:id
    def update 
        audio = find_audio
        audio.update!(audio_params)
        render json: audio
    end
    #DELETE /audios/:id
    def destroy
        audio = find_audio
        audio.destroy
        head :no_content
    end

    private
    #permit params
    def audio_params
        params.permit(:title, :audio,:is_approved,:likes,:is_flagged,:category_id,:user_id)
    end

    #find an audio
    def find_audio
        audio = Audio.find(params[:id])
    end

end
