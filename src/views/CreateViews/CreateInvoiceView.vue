<script setup>
import DatePicker from '@/components/ReusableComponents/inputs/DatePicker.vue'
import DropdownInput from '@/components/ReusableComponents/inputs/DropdownInput.vue'
import DropdownInputOption from '@/components/ReusableComponents/inputs/DropdownInputOption.vue'
import ItemsCreationTable from '@/components/ReusableComponents/ItemsCreationTable.vue'
</script>

<template>
  <h4 class="w-full text-6xl" dir="ltr">INV-0001</h4>

  <hr class="w-full my-2" />
  <div class="mt-2 grid grid-cols-4 w-full gap-4 md:h-12 overflow-hidden">
    <dropdown-input class="h-full">
      <dropdown-input-option name="الشُميخ المُليخ" />
    </dropdown-input>
    <date-picker title="تاريخ الفاتورة" />

    <date-picker title="تاريخ ألإستحقاق" />
    <dropdown-input>
      <dropdown-input-option name="SAR" />
    </dropdown-input>
  </div>
  <hr class="w-full my-2" />

  <items-creation-table />
</template>
