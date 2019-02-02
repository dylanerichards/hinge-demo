class Types::UserType < GraphQL::Schema::Object
    description "A user"

    field :id, ID
    field :first_name, String
    field :last_name, String

    field :question_1, String
    field :question_2, String
    field :question_3, String

    field :answer_1, String
    field :answer_2, String
    field :answer_3, String

    field :photos, [String]
end
