class VideosController < ApplicationController
    #    GET /videos
    def index
        render json: Video.all
    end

    #    GET /videos/:in
    def show
       render json: find_a_video
    end
    #    POST /videos
    def create
        video = Video.create!(video_params)
        render json: video, status: :created
    end
    #    PATCH /videos/:in
    def update
        video = find_a_video
        video.update!(video_params)
        render json: video, status: :accepted
    end
    #    DELETE /videos
    def destroy
        video = find_a_video
        video.destroy
        head :no_content
    end

    private
    #find a video
    def find_a_video
        video = Video.find(params[:id])
    end

    #permit params
    def video_params
        params.permit(:title,:content,:is_approved,:likes,:is_flagged)
    end

end
