class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.text :photos, array: true, default: []

      t.string :question_1
      t.string :answer_1

      t.string :question_2
      t.string :answer_2

      t.string :question_3
      t.string :answer_3

      t.timestamps
    end
  end
end
