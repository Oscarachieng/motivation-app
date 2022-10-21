class AudioComment < ApplicationRecord
    validates :user_id, :audio_id, :likes,:comment, presence:true
    belongs_to :audio
end
