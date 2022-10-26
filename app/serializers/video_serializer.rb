class VideoSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :video, :is_approved, :likes, :is_flagged
  has_many :video_comments
  belongs_to :user
  belongs_to :category

  def video
    if object.video.attached?
      {
        url:rails_blob_url(object.video,host: "localhost:3000")
      }
    else
      {
        url:nil
      }
    end
  end
end
