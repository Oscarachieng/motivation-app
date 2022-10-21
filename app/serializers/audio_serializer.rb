class AudioSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :is_approved, :likes, :is_flagged
  has_many :audio_comments
  belongs_to :user
end
