module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :user, UserType, null: true
    description "Find a user by ID"
    argument :id, ID, required: true


    def user(id)
      User.find(Id)
    end
  end
end
