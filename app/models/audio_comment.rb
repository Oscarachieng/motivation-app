class AudioComment < ApplicationRecord
    validates :user_id, :audio_id, :likes,:comment, presence:true
    belongs_to :audio
    belongs_to :user
    has_many :audio_comment_replies
end
