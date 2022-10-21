class Audio < ApplicationRecord
    validates :title, :content,:is_approved,:likes,:is_flagged, presence: true
    validates :title, uniqueness: true
    has_many :audio_comments
end
