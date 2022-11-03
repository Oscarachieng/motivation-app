class AudioCommentReply < ApplicationRecord
    validates :user_id,:reply,:audio_comment_id,:likes, presence:true
    belongs_to :audio_comment
    belongs_to :user
end
