class AudioSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :audio, :is_approved, :likes, :is_flagged
  has_many :audio_comments
  belongs_to :user
  belongs_to :category

  def audio
    if object.audio.attached?
      {
        url:rails_blob_url(object.audio, host:"localhost:3000")
      }
    else
      {
      url:nil
      }
  end
end
end
