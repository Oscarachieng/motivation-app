class Audio < ApplicationRecord
    has_one_attached :audio
    validates :title, :audio,:is_approved,:likes,:is_flagged, presence: true
    validates :title, uniqueness: true
    has_many :audio_comments
    belongs_to :user
    belongs_to :category
end
