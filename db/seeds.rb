
# 
puts "
    🌱Seeding data....
    Please wait ⏳....
"
category = ['student', 'staff']
    
#SEEDING  USERS : data for testing the database

User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: "oscar.achieng@student.moringaschool.com",
    username: Faker::Name.first_name,
    password: "oscarachieng0799",
    avatar_url: Faker::Avatar.image,
    user_category: category[rand(0..1)]
    )

User.create!(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: "livya.kiruja@student.moringaschool.com",
        username: Faker::Name.first_name,
        password: "oscarachieng0799",
        avatar_url: Faker::Avatar.image,
        user_category: category[rand(0..1)]
        )

User.create!(
            first_name: Faker::Name.first_name,
            last_name: Faker::Name.last_name,
            email: "samuel.mwaura@student.moringaschool.com",
            username: Faker::Name.first_name,
            password: "oscarachieng0799",
            avatar_url: Faker::Avatar.image,
            user_category: category[rand(0..1)]
            )
User.create!(

                first_name: Faker::Name.first_name,
                last_name: Faker::Name.last_name,
                email: "peter.atito@student.moringaschool.com",
                username: Faker::Name.first_name,
                password: "oscarachieng0799",
                avatar_url: Faker::Avatar.image,
                user_category: category[rand(0..1)]
                )
User.create!(

                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    email: "kelvin.mwangig@student.moringaschool.com",
                    username: Faker::Name.first_name,
                    password: "oscarachieng0799",
                    avatar_url: Faker::Avatar.image,
                    user_category: category[rand(0..1)]
                    )

User.create!(

                        first_name: Faker::Name.first_name,
                        last_name: Faker::Name.last_name,
                        email: "newton.mboi@student.moringaschool.com",
                        username: Faker::Name.first_name,
                        password: "oscarachieng0799",
                        avatar_url: Faker::Avatar.image,
                        user_category: category[rand(0..1)]
                        )

 4.times do
     categories = ["Data Science", "Web Development", "Android Development", "Internet of Things"]
                           #  
    Category.create!( "category": categories[rand(0..3)])
end                     

10.times do
 Article.create!(

    "title":Faker::Name.unique.name,
    "content":Faker::Lorem.paragraph(sentence_count: 20, supplemental: true, random_sentences_to_add: 4),
    "is_approved":true,
    "likes":rand(1..50),
    "is_flagged": true,
    "category_id":rand(1..2),
    "user_id":rand(1..6))

    Video.create!(

        "title":Faker::Name.unique.name,
        "content":Faker::Lorem.paragraph(sentence_count: 20, supplemental: true, random_sentences_to_add: 4),
        "is_approved":true,
        "likes":rand(1..50),
        "is_flagged": true,
        "category_id":rand(1..2),
        "user_id":rand(1..6))

    Audio.create!(

        "title":Faker::Name.unique.name, 
        "content":Faker::Lorem.paragraph(sentence_count: 20, supplemental: true, random_sentences_to_add: 4),
        "is_approved":true,
        "likes":rand(1..50),
        "is_flagged": true,
        "category_id":rand(1..2),
        "user_id":rand(1..6)) 
        
 end
   
 10.times do 
    ArticleComment.create!(

        "comment":Faker::Lorem.sentence,
        "likes":rand(1..50),
        "article_id":rand(1..10),
        "user_id":rand(1..6)
    )
    VideoComment.create!(

            "comment":Faker::Lorem.sentence,
            "likes":rand(1..50),
            "video_id":rand(1..10),
            "user_id":rand(1..6)
        )
    AudioComment.create!(

                "comment":Faker::Lorem.sentence,
                "likes":rand(1..50),
                "audio_id":rand(1..10),
                "user_id":rand(1..6)
            )   
 end
 10.times do 
    ArticleCommentReply.create!(

    "reply":Faker::Lorem.sentence,
    "likes":rand(1..50),
    "user_id":rand(1..6),
    "article_comment_id":rand(1..10)
    )
   AudioCommentReply.create!(

        "reply":Faker::Lorem.sentence,
        "likes":rand(1..50),
        "user_id":rand(1..6),
        "audio_comment_id":rand(1..10)
        )
   VideoCommentReply.create!(

            "reply":Faker::Lorem.sentence,
            "likes":rand(1..50),
            "user_id":rand(1..6),
            "video_comment_id":rand(1..10)
            )
 end

 
 Subscription.create!(

    "user_id":rand(1..6),
    "category_id":rand(1..3),
 )

 puts "
    💾Success!
    Done seeding!✅
"