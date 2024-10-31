class CreateWorkflows < ActiveRecord::Migration[7.1]
  def change
    create_table :workflows do |t|
      t.string :name
      t.text :data

      t.timestamps
    end
  end
end
