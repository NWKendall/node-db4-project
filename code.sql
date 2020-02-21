-- SELECT 
--     r.name as recipe,
    
--     inst.steps,
--     i.name as ingred,

--     ii.quantity as amount,
--     ii.measurement_type as measure   
    
-- from instructions_ingredients as ii

--     JOIN instructions as inst
--     ON II.instruction_id = inst.id    
--     JOIN ingredients as i
--     ON ii.ingredient_id = i.id
--     JOIN recipes as r
--     ON r.id = ii.instruction_id

-- WHERE r.id = 1

