#This file's sole purpose is to seed data for development purposes only!

puts "
    🌱Seeding data....
    Please wait ⏳....
"

10.times do
    #create 10 Users

User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    username: Faker::Name.first_name,
    avatar_url: Faker::Avatar.image
    )
end



puts "
    💾Success!
    Done seeding!✅
"