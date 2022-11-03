
# 
puts "
    🌱Seeding data....
    Please wait ⏳....
"



 4.times do
     categories = ["Data Science", "Web Development", "Android Development", "Internet of Things"]
                           #  
    Category.create!( "category": categories[rand(0..3)])
end                     

10.times do
 Post.create!(

    "title":Faker::Name.unique.name,
    "content":Faker::Lorem.paragraph(sentence_count: 20, supplemental: true, random_sentences_to_add: 4),
    "is_approved":true,
    "likes":rand(1..50),
    "content_type":article,
    "is_flagged": true,
    "category_id":rand(1..2),
    "user_id":rand(1..2))
   

  
 end
   
 10.times do 
    PostComment.create!(

        "comment":Faker::Lorem.sentence,
        "likes":rand(1..50),
        "article_id":rand(1..10),
         "user_id":rand(1..2))
    
    VideoComment.create!(

            "comment":Faker::Lorem.sentence,
            "likes":rand(1..50),
            "video_id":rand(1..2),
             "user_id":rand(1..2))
        
    AudioComment.create!(

                "comment":Faker::Lorem.sentence,
                "likes":rand(1..50),
                "audio_id":rand(1..2),
                 "user_id":rand(1..2))
             
 end
 10.times do 
    PostCommentReply.create!(

    "reply":Faker::Lorem.sentence,
    "likes":rand(1..50),
     "user_id":rand(1..2),
    "article_comment_id":rand(1..10)
    )
   AudioCommentReply.create!(

        "reply":Faker::Lorem.sentence,
        "likes":rand(1..50),
         "user_id":rand(1..2),
        "audio_comment_id":rand(1..10)
   ) 
   VideoCommentReply.create!(

            "reply":Faker::Lorem.sentence,
            "likes":rand(1..50),
             "user_id":rand(1..2),
            "video_comment_id":rand(1..10)
   )   
 end

 
 Subscription.create!(

     "user_id":rand(1..2),
    "category_id":rand(1..3),
 )

 puts "
    💾Success!
    Done seeding!✅
"